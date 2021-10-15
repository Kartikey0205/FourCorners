package com.example.demoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;

import com.example.demoapp.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    ActivityMainBinding b;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        b = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(b.getRoot());

        b.registerBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Button animation
                final Animation animation = AnimationUtils.loadAnimation(MainActivity.this,R.anim.bounce);
                MyBounceInterpolator interpolator = new MyBounceInterpolator(0.2,20);
                animation.setInterpolator(interpolator);
                b.registerBtn.startAnimation(animation);

                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://docs.google.com/forms/d/e/1FAIpQLSfwVRY68JHp_ulz0rSi2Iq-cjB1jgwO0_JFZm7J38o0V3On1g/viewform?usp=sf_link"));
                startActivity(intent);
            }
        });
        b.visitBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Button animation
                final Animation animation = AnimationUtils.loadAnimation(MainActivity.this,R.anim.bounce);
                MyBounceInterpolator interpolator = new MyBounceInterpolator(0.2,20);
                animation.setInterpolator(interpolator);
                b.visitBtn.startAnimation(animation);

                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.linkedin.com/in/mitaliagrawal17/"));
                startActivity(intent);
            }
        });

    }
}