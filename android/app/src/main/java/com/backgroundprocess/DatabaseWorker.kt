package com.backgroundprocess

import android.content.Context
import androidx.work.Worker
import androidx.work.WorkerParameters

class DatabaseWorker(context: Context, workerParams: WorkerParameters) : Worker(context, workerParams) {

    override fun doWork(): Result {
        val dbHelper = DBHelper(applicationContext)
        Instances.getInstance().infinityManager.update();

        return Result.success()
    }

}
