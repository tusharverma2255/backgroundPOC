package com.backgroundprocess;

import android.content.Context;

public class Instances {
    public static Instances instance;
    public InfinityManager infinityManager;
    public Context context;

    private Instances(){
        this.infinityManager = new InfinityManagerImpl();
    }

    public static Instances getInstance(){
        if(instance == null){
            instance = new Instances();
        }
        return instance;
    }
}
