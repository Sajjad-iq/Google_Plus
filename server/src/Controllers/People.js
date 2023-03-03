const Account = require('../Schema/Account')


exports.FindUserHandler = async (req, res) => {
    try {
        const user = await Account.findOne({ _id: req.body.id });
        if (user) res.status(200).json(user)
        else res.status(404).json("user not found")
    } catch (e) {
        console.log(e)
    }
};

exports.AddFollowersHandler = async (req, res) => {

    const user = await Account.findOne({ _id: req.body.FindUser });

    try {
        if (user.Followers.includes(req.body.OwnerId)) {
            const RemoveFollow = await Account.findByIdAndUpdate(req.body.FindUser, {
                $pull: { Followers: req.body.OwnerId }
            })
            res.status(200).json({
                FindUser: user,
                IsFollow: false
            })
        } else {
            const AddFollow = await Account.findByIdAndUpdate(req.body.FindUser, {
                $addToSet: { Followers: req.body.OwnerId }
            })
            res.status(200).json({
                FindUser: user,
                IsFollow: false
            })
        }
    } catch (e) {
        console.log(e)
    }
};