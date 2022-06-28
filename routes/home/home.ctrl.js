"use strict"
//컨트롤, 기능부분

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};
module.exports = {
    home,
    login,
};