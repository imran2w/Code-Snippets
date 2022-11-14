/**
    * This method check mobile is connected to network.
    * @param context
    * @return true if connected otherwise false.
    */
public static boolean isNetworkAvailable(Context context) {
    ConnectivityManager conMan = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
    if(conMan.getActiveNetworkInfo() != null && conMan.getActiveNetworkInfo().isConnected())
        return true;
    else
        return false;
}