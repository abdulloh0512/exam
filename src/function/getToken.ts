import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import appSlice from "../redux/appSlice";

export function getTimeOneHourLater() {
  const currentTime = new Date();
  const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);
  const day = String(oneHourLater.getDate()).padStart(2, "0");
  const month = String(oneHourLater.getMonth() + 1).padStart(2, "0");
  const year = oneHourLater.getFullYear();
  const hours = String(oneHourLater.getHours()).padStart(2, "0");
  const minutes = String(oneHourLater.getMinutes()).padStart(2, "0");
  const oneHourLaterFormatted = `${day}.${month}.${year} ${hours}:${minutes}`;
  return oneHourLaterFormatted;
}
export function getTimeCurrentTime() {
  const currentTime = new Date();
  const oneHourLater = new Date(currentTime.getTime());
  const day = String(oneHourLater.getDate()).padStart(2, "0");
  const month = String(oneHourLater.getMonth() + 1).padStart(2, "0");
  const year = oneHourLater.getFullYear();
  const hours = String(oneHourLater.getHours()).padStart(2, "0");
  const minutes = String(oneHourLater.getMinutes()).padStart(2, "0");
  const oneHourLaterFormatted = `${day}.${month}.${year} ${hours}:${minutes}`;
  return oneHourLaterFormatted;
}

async function getFetch() {
  const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        import.meta.env.VITE_CLIENT_ID + ":" + import.meta.env.VITE_SECRET_KEY
      )}`,
    },
    method: "POST",
    body: "grant_type=client_credentials",
  });
  const data = await resp.json();
  const expireDate = getTimeOneHourLater();
  localStorage.setItem("expireDate", expireDate);
  localStorage.setItem("token", data.access_token);
  return data.access_token;
}

function examination(dispatch: Dispatch<UnknownAction>) {
  const oldToken = localStorage.getItem("token");
  const expireDate = localStorage.getItem("expireDate");
  if (oldToken && expireDate && expireDate > getTimeCurrentTime()) {
    dispatch(appSlice.actions.preferToken(oldToken));
  } else {
    getFetch().then((e) => dispatch(appSlice.actions.preferToken(e)));
  }
}

export { examination };
