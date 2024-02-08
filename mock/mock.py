import tornado.ioloop
import tornado.web
import tornado.websocket
import time

class WebSocketHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        print("open success")
        # タイマー、1秒ごとに現在時刻をWebSocket経由で送信
        self.timer = tornado.ioloop.PeriodicCallback(self.send_data, 1000)
        self.timer.start()

    def on_close(self):
        self.timer.stop()

    def send_data(self):
        # 現在時刻をWebSocket経由で送信
        self.write_message('Now is' + str(time.time()))

application = tornado.web.Application([
    (r'/', WebSocketHandler),
])

if __name__ == '__main__':
    application.listen(9980)
    tornado.ioloop.IOLoop.instance().start()
