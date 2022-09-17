
const convertCurrency = (req, res) => {
    try {
        const { dollars } = req.body;
        if (
            !dollars
        ) {
            return res
                .status(400)
                .json({ status: false, message: "Please Enter Value" });
        }
        const regex = /^[0-9-+()]*$/;
        if (!regex.test(dollars)) {
            return res.status(400).json({ status: false, message: "Invalid value" });
        }
        const PKR = dollars * 221.91;
        const INR = dollars * 79.656;
        const Pound = dollars * 0.876;
        const obj = { PKR, INR, Pound };
        console.log(obj)
        return res.status(200).json({ status: true, data: obj });
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
};
module.exports = { convertCurrency };