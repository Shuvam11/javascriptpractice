const url = 
"https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
async function solbe(){
    const sunrise = await getuser (url);
    console.log({ sunrise });
}

Solve();