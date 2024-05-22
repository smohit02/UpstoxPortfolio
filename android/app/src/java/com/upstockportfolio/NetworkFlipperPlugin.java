import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;

NetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();
new NetworkingModule.CustomClientBuilder() {
    @Override
    public void apply(OkHttpClient.Builder builder) {
        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));
    }
});
client.addPlugin(networkFlipperPlugin);