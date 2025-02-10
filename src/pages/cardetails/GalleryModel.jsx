import { Image, Modal } from "antd";

const GalloryModel = ({ isVisible, onClose, handleImage }) => {
  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={1000}
      closable={true}
    >
      <h2 className="text-center text-2xl font-semibold my-3">Gallery</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {handleImage?.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded" />
        ))}
      </div>
    </Modal>
  );
};

export default GalloryModel;
