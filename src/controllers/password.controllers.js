const { verifyMinSize, verifyMinUppercase, verifyMinLowercase, verifyMinDigit, verifyMinSpecialChars, verifyMinNoRepeted } = require("../func/password.func");

const verifyPassword = async (req, res) => {
    // const { password, rules } = req.body;

    // try {
    //     let verify = true;
    //     const noMatch = [];

    //     await rules.map((rule) => {

    //         if (rule.rule === "minSize") {
    //             const hasMinSize = verifyMinSize(password, rule);
    //             if (!hasMinSize) {
    //                 noMatch.push('minSize');
    //             }
    //         }

    //         if (rule.rule === "minUppercase") {
    //             const hasMinUpperCase = verifyMinUppercase(password, rule)
    //             if (!hasMinUpperCase) {
    //                 noMatch.push('minUppercase');
    //             }
    //         }

    //         if (rule.rule === "minLowercase") {
    //             const hasMinLowerCase = verifyMinLowercase(password, rule)
    //             if (!hasMinLowerCase) {
    //                 noMatch.push('minLowercase');
    //             }
    //         }

    //         if (rule.rule === "minDigit") {
    //             const hasMinDigit = verifyMinDigit(password, rule)
    //             if (!hasMinDigit) {
    //                 noMatch.push('minDigit');
    //             }
    //         }

    //         if (rule.rule === "minSpecialChars") {
    //             const hasMinSpecialChars = verifyMinSpecialChars(password, rule)
    //             if (!hasMinSpecialChars) {
    //                 noMatch.push('minSpecialChars');
    //             }
    //         }

    //         if (rule.rule === "noRepeted") {
    //             const hasNoRepeted = verifyMinNoRepeted(password)
    //             if (!hasNoRepeted) {
    //                 noMatch.push('noRepeted');
    //             }
    //         }
    //     });

    //     if (noMatch.length !== 0) {
    //         verify = false;
    //     }

    //     res.status(200).json({ "verify": verify, "noMatch": noMatch });
    res.send("teste");
} catch (error) {
    res.status(500).json(error.message);
}

}

module.exports = { verifyPassword }