package com.backgroundprocess;

import android.util.Log;

public class InfinityManagerImpl implements InfinityManager {


    @Override
    public void update() {

        //DB Write
        //Server Call
        DBHelper dBhelper = new DBHelper(Instances.getInstance().context);
        for (int i = 0; i < 1000; i++) {
//            Instances.getInstance().infinityManager.update();
            Log.d("DatabaseWorker", "Writing to database: Entry " + i);
            dBhelper.insertData("Entry " + i);

        }
    }
}
