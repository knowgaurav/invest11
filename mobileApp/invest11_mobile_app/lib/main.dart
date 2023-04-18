import 'dart:io';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

void main() {
  runApp(MaterialApp(
    title: 'invest11',
    home: WebApp(),
    debugShowCheckedModeBanner: false,
  ));
}

class WebApp extends StatefulWidget {
  @override
  State<WebApp> createState() => _WebAppState();
}

bool connectionStatus = true;

Future check() async {
  try {
    final result = await InternetAddress.lookup('google.com');
    if (result.isNotEmpty && result[0].rawAddress.isNotEmpty) {
      connectionStatus = true;
      print("connected $connectionStatus");
    }
  } on SocketException catch (_) {
    connectionStatus = false;
    print("not connected $connectionStatus");
  }
}

class _WebAppState extends State<WebApp> {
  late WebViewController controller;
  bool isLoading = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // title: Text("WebView"),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        toolbarHeight: 0,
      ),
      body: FutureBuilder(
          future: check(), // a previously-obtained Future or null
          builder: (BuildContext context, AsyncSnapshot<dynamic> snapshot) {
            if (connectionStatus == true) {
              //if Internet is connected
              return Stack(children: <Widget>[
                WebView(
                  javascriptMode: JavascriptMode.unrestricted,
                  initialUrl: 'https://invest11.netlify.com',
                  onPageFinished: (finish) {
                    setState(() {
                      isLoading = false;
                    });
                  },
                  onWebViewCreated: (controller) {
                    this.controller = controller;
                  },
                ),
                isLoading
                    ? Center(
                        child: CircularProgressIndicator(
                          valueColor:
                              AlwaysStoppedAnimation<Color>(Colors.black),
                        ),
                      )
                    : Stack(),
              ]);
            } else {
              //If internet is not connected
              return SafeArea(
                  child: WebviewScaffold(
                      url: Uri.dataFromString(
                              '<html><body style="background-color: orangered; color: white"><center><h1 style="margin-top: 50px">Offline</h1><h3>Please check your internet connection!</h3><center></body></html>',
                              mimeType: 'text/html')
                          .toString()));
            }
          }),
    );
  }
}
