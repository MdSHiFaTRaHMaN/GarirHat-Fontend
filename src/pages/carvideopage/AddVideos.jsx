import { Button, Form, Input, message, Select } from "antd";
import { useState } from "react";
import {
  API,
  useAllBrand,
  useModelByBrand,
  useUserProfile,
} from "../../api/api";
import { useNavigate } from "react-router-dom";

const AddVideos = () => {
  const [form] = Form.useForm();
  const { allBrand } = useAllBrand();
  const [brandID, setBrandID] = useState();
  const { modelByBrand } = useModelByBrand(brandID);
  const [selectBrand, setSelectBrand] = useState("");
  const [selectModel, setSelectModel] = useState("");
  const [loading, setLoading] = useState(false);
  const { userProfile } = useUserProfile();
  const user = "u" + userProfile.id;
  const navigate = useNavigate();

  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleSelectBrand = (value, label) => {
    setBrandID(value);
    setSelectBrand(label.label);
  };
  const handleselectModel = (value) => {
    setSelectModel(value);
  };

  const handleSubmit = async (values) => {
    // const values = await form.validateFields();

    const formData = new FormData();
    formData.append("user", user);
    formData.append("make", selectBrand);
    formData.append("model", selectModel);
    formData.append("year", values.year);
    formData.append("trim", values.trim);
    formData.append("videoUrl", values.videoUrl);

    setLoading(true);
    try {
      const response = await API.post("/video/post", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("response", response);
      if (response.status === 200) {
        message.success("Video added Successfully");
        form.resetFields();
        navigate("/car-videos")
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-2/5 mx-auto p-3">
        <div>
            <h1 className="text-xl font-semibold my-4">Add Your Video Review</h1>
        </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit} // Handle submit
      >
        <Select
          showSearch
          placeholder="Select Brand"
          className="w-full h-10 text-black"
          optionFilterProp="label"
          onSearch={onSearch}
          options={allBrand.map((brand) => ({
            value: brand.id,
            label: brand.brand_name,
          }))}
          onChange={handleSelectBrand}
        />
        <h3>
          <span className="text-red-500 text-xl">* </span> Select Vehicle Model
        </h3>
        <Select
          showSearch
          className="w-full rounded h-10 mt-2"
          placeholder="Select Model"
          optionFilterProp="label"
          options={modelByBrand?.data?.model?.map((model) => ({
            value: model.model_name,
            label: model.model_name,
          }))}
          disabled={!brandID}
          onChange={handleselectModel}
        />

        <Form.Item
          label="Year"
          name="year"
          rules={[{ required: true, message: "Please enter year!" }]}
        >
          <Input
            placeholder="Enter year (e.g., 2020)"
            className="py-2.5 rounded"
          />
        </Form.Item>

        <Form.Item
          label="Trim"
          name="trim"
          rules={[{ required: true, message: "Please enter trim!" }]}
        >
          <Input placeholder="Enter trim" className="py-2.5 rounded" />
        </Form.Item>

        <Form.Item
          label="Video URL"
          name="videoUrl"
          rules={[{ required: true, message: "Please enter video URL!" }]}
        >
          <Input
            placeholder="Enter video URL (e.g., https://youtu.be/...)"
            className="py-2.5 rounded"
          />
        </Form.Item>

        <div className="flex justify-end gap-2">
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddVideos;
