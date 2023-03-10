import React, { useState } from "react";

function DoseForm({ onSubmit }) {
    const [prp, setPrp] = useState("");
    const [acp, setAcp] = useState("");
    const [bmac, setBmac] = useState("");
    const [ha, setHa] = useState("");
    const [stemcells, setStemcells] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const doseData = {
            prp,
            acp,
            bmac,
            ha,
            stemcells,
        };
        onSubmit(doseData);
    };

    return (
        <form onSubmit={handleSubmit} className="dose-form">
            <h1>New Dosage</h1>

            <label htmlFor="prp">PRP:
                <input type="text" id="prp" value={prp} onChange={(event) => setPrp(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="acp">ACP:
                <input type="text" id="acp" value={acp} onChange={(event) => setAcp(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="bmac">BMAC:
                <input type="text" id="bmac" value={bmac} onChange={(event) => setBmac(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="stemcells">STEMCELLS:
                <input type="text" id="stemcells" value={stemcells} onChange={(event) => setStemcells(event.target.value)} />
            </label>
            <br />
            <br />
            <label htmlFor="ha">HA:
                <input type="text" id="ha" value={ha} onChange={(event) => setHa(event.target.value)} />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default DoseForm;
