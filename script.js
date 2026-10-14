function enviar() {
  var lead = {
    full_name: document.getElementById("nombre").value,
    phone: document.getElementById("telefono").value,
    email: document.getElementById("correo").value,
    city: document.getElementById("ciudad").value,
    service_interest: document.getElementById("servicio").value,
    message: document.getElementById("mensaje").value
  };

  if (WEBHOOK_URL) {
    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_type: "lead.created", source: { platform: "web" }, lead: lead })
    });
  } else {
    console.log(lead);
  }

  alert("Enviado");
  document.getElementById("formulario").reset();
}
