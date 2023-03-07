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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="prp">PRP:</label>
                <input
                    type="text"
                    id="prp"
                    value={prp}
                    onChange={(event) => setPrp(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="acp">ACP:</label>
                <input
                    type="text"
                    id="acp"
                    value={acp}
                    onChange={(event) => setAcp(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="bmac">BMAC:</label>
                <input
                    type="text"
                    id="bmac"
                    value={bmac}
                    onChange={(event) => setBmac(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="stemcells">STEMCELLS:</label>
                <input
                    type="text"
                    id="stemcells"
                    value={stemcells}
                    onChange={(event) => setStemcells(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="ha">HA:</label>
                <input
                    type="text"
                    id="ha"
                    value={ha}
                    onChange={(event) => setHa(event.target.value)}
                />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default DoseForm;
