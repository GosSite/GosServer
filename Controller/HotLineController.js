const HotLineModel = require('../models/HotLine')

class HotLineController {
    async getHotLineNumber(req,res) {
        try {
            const hotlines = await HotLineModel.find();
            res.status(200).send(hotlines)
        } catch (error) {
            console.error("Error getting hotline numbers:", error);
        }
    }

    async addHotLineNumber(req, res) {
        try {
            const newHotline = new HotLineModel({ number: req.body.number });
            const savedHotline = await newHotline.save();
            res.status(200).send(savedHotline);
        } catch (error) {
            console.error("Error adding hotline number:", error);
            res.status(500).send("Error adding hotline number");
        }
    }
    async updateHotLineNumber(req, res) {
        try {
            const existingHotline = await HotLineModel.findOne({ number: req.body.oldNumber });
            existingHotline.number = req.body.newNumber;
            const updatedHotline = await existingHotline.save();
            
            return res.status(200).send(updatedHotline);
        } catch (error) {
            console.error("Error updating hotline number:", error);
            throw error;
        }
    }
    
}

module.exports = new HotLineController();
