import { useCarReviewList } from "../api/api";
import { RefetchProvider } from "../context/RefetchContext";

const Demo1 = ({ children }) => {
    const { carReviewList, refetch } = useCarReviewList();

    return (
        <RefetchProvider refetch={refetch}>
            <div>
                <h1>Demo 1</h1>
                <p>{carReviewList.length}</p>
                {children}
            </div>
        </RefetchProvider>
    );
};

export default Demo1;
