// returns list of domain types
function domainType(domains) {
  const result=[];
  for(let i=0; i<domains.length;i++){
    let type=domains[i].split('.');
    type=type[type.length-1];
    switch(type){
      case "org": result.push("organization"); break;
      case "com": result.push("commercial"); break;
      case "net": result.push("network"); break;
      case "info": result.push("information");
    }
  }
  return result;
}

function domainType(domains) {
  const domainTypes = [];
  
  for(let i = 0; i < domains.length; i++) {
    const urlPieces = domains[i].split('.');
    const domain = urlPieces[urlPieces.length - 1];
    
    if(domain === 'org') {
      domainTypes.push('organization');   
    } else if (domain === 'com') {
      domainTypes.push('commercial');
    } else if (domain === 'net') {
      domainTypes.push('network');
    } else if (domain === 'info') {
      domainTypes.push('information');
    }
  }
  
  return domainTypes;
}


function init(){
  const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
  const result = domainType(domains);
  console.log("result: ", result);  //["organization", "commercial", "network", "information"]
}

init();