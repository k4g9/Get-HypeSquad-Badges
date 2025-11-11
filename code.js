let _mods = webpackChunkdiscord_app.push([[Symbol()], {}, (e) => e.c]);
webpackChunkdiscord_app.pop();

let findByProps=(...e)=>{for(let r of Object.values(_mods))try{if(!r.exports||r.exports===window)continue;if(e.every(e=>r.exports?.[e]))return r.exports;for(let t in r.exports)if(e.every(e=>r.exports?.[t]?.[e])&&"IntlMessagesProxy"!==r.exports[t][Symbol.toStringTag])return r.exports[t]}catch{}};

const api = findByProps("Jt", "tn").tn;
api.post({url: "/hypesquad/online",body:{house_id: 1}})
