const partners = [
  {
    name: "RISE Research Institutes of Sweden",
    country: "Sweden",
    logo: "images/rise.png",
    text: "RISE is the coordinator and applied research partner of the project, contributing expertise in project management, infrastructure and CO2 storage regulations, maritime logistics, business models, geological CO2 storage and sustainability analyses."
  },
  {
    name: "Chalmers University of Technology",
    country: "Sweden",
    logo: "images/chalmers.png",
    text: "Chalmers contributes through expertise from Marine Technology and Service Management and Logistics, supporting the project with research on maritime systems, logistics and technology management."
  },
  {
    name: "IVL Swedish Environmental Research Institute",
    country: "Sweden",
    logo: "images/ivl.png",
    text: "IVL contributes to regulatory analyses, onboard carbon capture and sustainability aspects of the operations studied in the project."
  },
  {
    name: "AB Welna-Andrén",
    country: "Sweden",
    logo: "images/welna-andren.png",
    text: "AB Welna-Andrén provides expertise in glass fibre reinforced plastic products for industrial and environmental applications, adapting solutions to LCO2 storage and transport needs."
  },
  {
    name: "Riga Technical University",
    country: "Latvia",
    logo: "images/rtu.png",
    text: "RTU contributes expertise in environmental engineering, climate neutrality, circular bioeconomy, sustainability assessment and system dynamics modelling."
  },
  {
    name: "SIA HAVE A TREE",
    country: "Latvia",
    logo: "images/have-a-tree.png",
    text: "SIA HAVE A TREE provides technical engineering solutions and products for climate applications, with experience in CCS, climate innovation and carbon management opportunities in Latvia."
  },
  {
    name: "BI Norwegian Business School",
    country: "Norway",
    logo: "images/bi.png",
    text: "BI contributes expertise in ocean business, shipping, logistics, law, strategy, energy, sustainability and operations research. BI leads the logistics work package in the project."
  },
  {
    name: "NMBU Norwegian University of Life Sciences",
    country: "Norway",
    logo: "images/nmbu.png",
    text: "NMBU contributes expertise in logistics, sustainability, resource economics, energy economics and environmental economics through the School of Economics and Business."
  },
  {
    name: "Horizont Energi",
    country: "Norway",
    logo: "images/horizont-energi.png",
    text: "Horizont Energi and its subsidiary Horizont Infra contribute industry expertise in developing end-to-end CCS value chains and clean ammonia production."
  },
  {
    name: "Hydro",
    country: "Norway",
    logo: "images/hydro.png",
    text: "Hydro is a leading aluminium and renewable energy company, contributing as an emitter and potential end-user in future CCS value chains."
  },
  {
    name: "Equinor",
    country: "Norway",
    logo: "images/equinor.png",
    text: "Equinor contributes expertise as a major energy supplier and operator on the Norwegian Continental Shelf, with experience in oil, gas and renewable energy solutions."
  },
  {
    name: "Danish Technological Institute",
    country: "Denmark",
    logo: "images/dti.png",
    text: "DTI contributes expertise in carbon capture technology, CO2 capture testing, clean vessel design and energy-efficient ship technology."
  },
  {
    name: "Technical University of Denmark",
    country: "Denmark",
    logo: "images/dtu.png",
    text: "DTU contributes expertise in fluid mechanics, naval architecture, offshore engineering, ship design and analysis of offshore structures."
  },
  {
    name: "Clean – Danish Water & Environmental Cluster",
    country: "Denmark",
    logo: "images/clean.png",
    text: "Clean supports innovation in carbon capture by connecting companies, research institutions and public authorities to develop sustainable technologies."
  },
  {
    name: "SINTEF Ocean",
    country: "Norway",
    logo: "images/sintef-ocean.png",
    text: "SINTEF Ocean contributes research and innovation expertise related to ocean industries, shipping, onboard CO2 collection and transport for permanent storage."
  }
];

const partnerGrid = document.getElementById("partnerGrid");

if (partnerGrid) {
  partners.forEach((partner, index) => {
    const button = document.createElement("button");
    button.className = "partner";
    button.onclick = () => openModal(index);
    button.innerHTML = `
      <img src="${partner.logo}" alt="${partner.name} logo" onerror="this.style.display='none'">
      <span>${partner.name}</span>
      <span class="country">${partner.country}</span>
    `;
    partnerGrid.appendChild(button);
  });
}

function openModal(index) {
  const partner = partners[index];
  const modal = document.getElementById("partnerModal");
  document.getElementById("modalLogo").src = partner.logo;
  document.getElementById("modalLogo").alt = partner.name + " logo";
  document.getElementById("modalTitle").innerText = partner.name;
  document.getElementById("modalCountry").innerText = partner.country;
  document.getElementById("modalText").innerText = partner.text;
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("partnerModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

document.getElementById("partnerModal")?.addEventListener("click", (event) => {
  if (event.target.id === "partnerModal") closeModal();
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});
