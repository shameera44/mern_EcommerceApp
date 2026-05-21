import Product from "../models/product.js";

export const createProduct = async (req, res) => {
    try {

        // console.log(req.user);

        // console.log(req.body);

        
        const product = await Product.create(req.body);

        
        res.json(product);
    } catch (error) {
         console.log(error);
        res.json({error: error.message,});
    }
};

export const getProducts = async (req, res) => {
    try {
        const keyword = req.query.search
            ? {
                name: {
                    $regex: req.query.search,
                    $options: "i",
                },
            }
            : {};

        const products =
            await Product.find(keyword);

        res.json(products);
    } catch (error) {
        res.json({
            error: error.message,
        });
    }
};

export const getSingleProduct = async (req, res) => {
    try {
        const product =
            await Product.findById(
                req.params.id
            );

        res.json(product);
    } catch (error) {
        res.json({
            error: error.message,
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product =
            await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                }
            );

        res.json(product);
    } catch (error) {
        res.json({
            error: error.message,
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Product Deleted",
        });
    } catch (error) {
        res.json({
            error: error.message,
        });
    }
};