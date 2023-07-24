# webrtc-node-socket
This node server opens up a server which takes in incoming requests for two clients to connect with one another over webrtc.

This socket server does a couple of things:
1. Sends ice candidates to let the peers know the plausible IPs to connect over.
2. Send an offer and answer to let the peers establish a connection over RTC
