import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://pacific-falls-91567.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);
    return [inventories, setInventories];
}
export default useInventories;