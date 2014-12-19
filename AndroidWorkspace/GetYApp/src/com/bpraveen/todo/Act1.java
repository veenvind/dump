package com.bpraveen.todo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONObject;

import android.net.Uri;
import android.os.Bundle;
import android.os.StrictMode;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.TaskStackBuilder;
import android.content.Context;
import android.content.Intent;
import android.support.v4.app.NotificationCompat;
import android.text.Editable;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


@SuppressLint("NewApi")
public class Act1 extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
		StrictMode.setThreadPolicy(policy); 
		
		setContentView(R.layout.activity_act1);
		
		Button myApp=(Button)findViewById(R.id.getMyAppButton);
		
		myApp.setOnClickListener(new Button.OnClickListener(){

			@Override
			public void onClick(View v) {
				Toast.makeText(getBaseContext(),"Please wait, connecting to server.",Toast.LENGTH_LONG).show();
				try{
					HttpClient Client = new DefaultHttpClient();
					EditText usernameInput = (EditText)findViewById(R.id.addTaskText);
					String username = usernameInput.getText().toString();
					String URL = "http://tellbusypage-dr.eglbp.corp.yahoo.com/hack1.php?username="+username;
					//String URL = "http://toolbar.yahoo.com";
					
					HttpGet httpget = new HttpGet(URL);
					Log.i("HTTP response","starting HTTP request");
					HttpResponse response = Client.execute(httpget);
					InputStream responseStream = response.getEntity().getContent();
					String jsonResult = convertStreamToString(responseStream);
					
					Log.i("HTTP response", jsonResult);
					
					JSONObject jsonResponse;
                    jsonResponse = new JSONObject(jsonResult);
					
					String packageID=jsonResponse.optString("package-id");//"com.yahoo.mobile.client.android.finance";
					String title = jsonResponse.optString("name");//"YahooFinance";
					String desc = jsonResponse.optString("desc");//"Get your stock quotes from mobile";
					
					NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(getBaseContext()).setSmallIcon(R.drawable.ic_launcher).setContentTitle(title).setContentText(desc);

					Intent intent = new Intent(Intent.ACTION_VIEW);
					intent.setData(Uri.parse("market://details?id="+packageID));
					//startActivity(intent);
					TaskStackBuilder stackBuilder = TaskStackBuilder.create(getBaseContext());
					stackBuilder.addParentStack(Act1.class);
					stackBuilder.addNextIntent(intent);
					PendingIntent resultPendingIntent =
					        stackBuilder.getPendingIntent(
					            0,
					            PendingIntent.FLAG_UPDATE_CURRENT
					        );
					mBuilder.setContentIntent(resultPendingIntent);

					
					NotificationManager mNotificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
					mNotificationManager.notify(1, mBuilder.build());

					
				}
				catch(Exception e){
					Log.e("HTTP response","Exceptoion",e);
				}
				
			}
			
		});

	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.act1, menu);
		return true;
	}
	
    private static String convertStreamToString(InputStream is) {
        /*
         * To convert the InputStream to String we use the BufferedReader.readLine()
         * method. We iterate until the BufferedReader return null which means
         * there's no more data to read. Each line will appended to a StringBuilder
         * and returned as String.
         */
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        StringBuilder sb = new StringBuilder();
     
        String line = null;
        try {
            while ((line = reader.readLine()) != null) {
                sb.append(line + "\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return sb.toString();
    } 

}
