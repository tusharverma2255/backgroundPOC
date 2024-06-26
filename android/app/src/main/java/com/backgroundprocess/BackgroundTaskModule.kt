package com.backgroundprocess

import android.content.Context
import androidx.work.OneTimeWorkRequest
import androidx.work.WorkManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = BackgroundTaskModule.NAME)
class BackgroundTaskModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    companion object {
        const val NAME = "BackgroundTaskModule"
    }

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun startTask() {
        val context = reactApplicationContext.applicationContext
        val workRequest = OneTimeWorkRequest.Builder(DatabaseWorker::class.java).build()
        WorkManager.getInstance(context).enqueue(workRequest)
    }
}
