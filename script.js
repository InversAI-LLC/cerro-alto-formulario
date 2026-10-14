function enviar() {
  var lead = {
    full_name: document.getElementById("nombre").value,
    phone: document.getElementById("telefono").value,
    email: document.getElementById("correo").value,
    city: document.getElementById("ciudad").value,
    service_interest: document.getElementById("servicio").value,
    message: document.getElementById("mensaje").value
  };

  // Mismo formato que el conector de Meta, con platform "web" y sin campaña.
  var evento = {
    event_id: "evt_web_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    event_type: "lead.created",
    created_at: new Date().toISOString(),
    source: { platform: "web", campaign: null, form_id: "frm_web_contacto" },
    lead: lead
  };

  if (WEBHOOK_URL) {
    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(evento)
    });
  } else {
    console.log(evento);
  }

  alert("Enviado");
  document.getElementById("formulario").reset();
}
