from random import randint
import time
import sys
import ibmiotf.application
import ibmiotf.device

#Provide your IBM Watson Device Credentials
organization = "qm6k13" # repalce it with organization ID
deviceType = "iot_device" #replace it with device type
deviceId = "1234" #repalce with device id
authMethod = "token"
authToken = "123456789"#repalce with token

try:
	deviceOptions = {"org": organization, "type": deviceType, "id": deviceId, "auth-method": authMethod, "auth-token": authToken}
	deviceCli = ibmiotf.device.Client(deviceOptions)
	#..............................................
	
except Exception as e:
	print("Caught exception connecting device: %s" % str(e))
	sys.exit()

deviceCli.connect()

while True:
        # T=randint(0, 50);
        # G=randint(0, 2000);
        # F=randint(0, 1100);
        T=33;
        G=90;
        F=90;
        #Send Temperature, Gas & Flame Readings to IBM Watson
        sprinkler = 0 if(F>=300 or (F>=300 and G>=500)) else 1
        exchaustFan = 0 if(G>=500 or (F>=300 and G>=500)) else 1
        data = { 'Temperature' : T, 'Gas': G , 'Flame': F ,'Sprinkler_Status': sprinkler,'Exchaust_Fans_Status' : exchaustFan}
        #print data
        def myOnPublishCallback():
            print ("Published Temperature = %s C" % T, "Flame = %s nm" % F, "Gas = %s ppm" % G, "Sprinklers_Status = %s " % sprinkler, "Exchaust _Fan_Status = %s " % exchaustFan, "to IBM Watson")

        success = deviceCli.publishEvent("event", "json", data, qos=0, on_publish=myOnPublishCallback)
        if not success:
            print("Not connected to IoTF")
        time.sleep(1)
        

# Disconnect the device and application from the cloud
deviceCli.disconnect()
