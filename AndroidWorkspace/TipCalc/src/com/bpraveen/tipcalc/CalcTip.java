package com.bpraveen.tipcalc;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class CalcTip extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_calc_tip);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.calc_tip, menu);
		return true;
	}

}
