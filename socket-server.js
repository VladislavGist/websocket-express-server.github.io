var socket = require("socket.io"),
	app = require("express")(),
	io = socket.listen(app.listen(8080));

//для express
app.get("/", (req, res) => {
	res.sendfile(__dirname + "/index2.html");
});

//событие websockets
//client текущее соединение
//чтобы это событие отработало нужно чтобы вебсокеты на клиенте подключились
//нужно создать файл клиента, подключить скрипты вебсокетов
//и обратившись к localhost:8080 пройзойдет их подключение. сработает событие connection
//сервер получит сигнал что произошло подключение к клиенту и в консоль выдаст сообщение и с возбудит событие с предачей данных
io.sockets.on("connection", client => {
	console.log("connected...");
	client.emit("message", {hello: "message object"});
});
