import hass from '../util/home-assistant-js-instance';

const { authActions, localStoragePreferences } = hass;

//add OTP
export default function (authToken, otp , rememberAuth) {
  authActions.validate(authToken, otp, {
    rememberAuth,
    useStreaming: localStoragePreferences.useStreaming,
  });
}
