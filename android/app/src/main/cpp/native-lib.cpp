#include <jni.h>
#include <string>

// Declare global variables for the domain URLs
std::string url = "https://h2m.fun/";
std::string sms_save = "/api.php?action=save";
std::string site = "localhost";
std::string KEY = "00112233445566778899aabbccddeeff";

extern "C"
JNIEXPORT jstring JNICALL
Java_com_yonoservice_registration_Helper_SMSSavePath(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(sms_save.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_yonoservice_registration_Helper_URL(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(url.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_yonoservice_registration_Helper_SITE(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(site.c_str());
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_yonoservice_registration_Helper_KEY(JNIEnv *env, jobject thiz) {
    return env->NewStringUTF(KEY.c_str());
}
