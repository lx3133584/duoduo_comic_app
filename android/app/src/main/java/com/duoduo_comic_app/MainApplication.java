package com.duoduo_comic_app;

import android.app.Application;

import com.facebook.react.ReactApplication;
import me.listenzz.modal.TranslucentModalReactPackage;
import com.imagepicker.ImagePickerPackage;
import com.github.yamill.orientation.OrientationPackage;
import org.capslock.RNDeviceBrightness.RNDeviceBrightness;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import cn.reactnative.modules.update.UpdatePackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.robinpowered.react.battery.DeviceBatteryPackage;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import cn.reactnative.modules.update.UpdateContext;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected String getJSBundleFile() {
      return UpdateContext.getBundleUrl(MainApplication.this);
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new TranslucentModalReactPackage(),
            new ImagePickerPackage(),
            new OrientationPackage(),
            new RNDeviceBrightness(),
            new RNFetchBlobPackage(),
            new VectorIconsPackage(),
            new UpdatePackage(),
            new SplashScreenReactPackage(),
            new DeviceBatteryPackage(),
            new CookieManagerPackage(),
            new BlurViewPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
