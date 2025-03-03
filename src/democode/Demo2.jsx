import { useRefetch } from "../context/RefetchContext";

const Demo2 = () => {
    const refetch = useRefetch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (refetch) {
            refetch(); // Parent Component থেকে refetch কল হচ্ছে!
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Demo2;
