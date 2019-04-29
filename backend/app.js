const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require("fs");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

var config = JSON.parse(fs.readFileSync('backend/settings.json', 'utf-8'));

mongoose.connect(config.DB, { useNewUrlParser: true })
	.then((db) => {
		console.log('Connected to DB', db.connections[0].host);
	})
	.catch((err) => {
		console.log('Cannot connect to DB - ' + err);
	});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images"))); 

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers",
		"Origin, X-Requseted-With, Content-Type, Accept, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods",
		"GET, POST, PATCH, PUT, DELETE, OPTIONS"
		);
	next();
});


app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;