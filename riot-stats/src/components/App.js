import React, { useState } from "react";
import Form from "./Form";
import modes from "../modes";
import Results from "./Results";

function App() {
  const [form, setForm] = useState({
    search: "",
  });
  const [mode, setMode] = useState(modes.LEAGUE_OF_LEGENDS);
  const [summoner, setSummoner] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.search || form.search === "") return;
    // ping API for summoner data
    const url = `https://un4nmfv2nk.execute-api.us-west-2.amazonaws.com/development/summoner/by-name?region=na1&name=${form.search}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.id) {
          data.notFound = false;
          setSummoner(data);
        } else {
          // summoner not found
          setSummoner({
            ...summoner,
            notFound: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleModeChange(event, newValue) {
    setMode(newValue);
  }

  return (
    <>
      <Form
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onModeChange={handleModeChange}
      />
      <Results
        mode={mode}
        onModeChange={handleModeChange}
        summoner={summoner}
      />
    </>
  );
}

export default App;
