
const C = window.SITE_CONTENT;

function $(id){ return document.getElementById(id); }

function ytId(url){
  if(!url) return "";
  try{
    const u = new URL(url);
    if(u.hostname.includes("youtu.be")) return u.pathname.replace("/","");
    if(u.pathname.startsWith("/shorts/")) return u.pathname.split("/shorts/")[1].split("/")[0];
    if(u.searchParams.get("v")) return u.searchParams.get("v");
    if(u.pathname.startsWith("/embed/")) return u.pathname.split("/embed/")[1].split("/")[0];
  }catch(e){}
  return url;
}

function setLink(id, href){
  const el=$(id);
  if(el) el.href=href;
}

$("name").textContent=C.name;
$("profession").textContent=C.professionalTitle;
$("heroHeadline").textContent=C.heroHeadline;
$("heroText").textContent=C.heroText;
$("heroImage").src=C.heroImage;

$("aboutTitle").textContent=C.aboutTitle;
$("aboutText").innerHTML=C.aboutText.map(x=>`<p>${x}</p>`).join("");

setLink("heroWhatsapp",C.whatsapp);
setLink("heroCalendly",C.calendly);

const videos=$("videos");
C.videos.forEach(v=>{
  const card=document.createElement("article");
  card.className="video-card";
  const id=ytId(v.url);
  card.innerHTML=`
    <iframe class="video-frame"
      src="https://www.youtube-nocookie.com/embed/${id}"
      title="${v.title}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="video-meta">${v.title}</div>`;
  videos.appendChild(card);
});

const reviews=$("reviews");
C.reviewImages.forEach(src=>{
  const item=document.createElement("div");
  item.className="review-card";
  item.innerHTML=`<img src="${src}" alt="המלצת לקוח" loading="lazy">`;
  reviews.appendChild(item);
});

$("workshopTitle").textContent=C.workshopTitle;
$("workshopText").textContent=C.workshopText;
setLink("workshopUrl",C.workshopUrl);

setLink("contactWhatsapp",C.whatsapp);
setLink("contactFacebook",C.facebook);
setLink("contactCalendly",C.calendly);

$("footerText").textContent=C.footerText;


/* Optional promotional banner */
if (C.banner) {
  const section = $("promoBanner");
  const image = $("promoBannerImage");
  const link = $("promoBannerLink");

  if (C.banner.enabled && C.banner.image) {
    image.src = C.banner.image;
    image.alt = C.banner.alt || "הודעה מיוחדת";

    if (C.banner.link) {
      link.href = C.banner.link;
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.removeAttribute("href");
      link.removeAttribute("target");
      link.style.cursor = "default";
    }

    section.hidden = false;
  }
}
