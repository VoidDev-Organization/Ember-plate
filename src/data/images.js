// All photography lives here. Swap URLs (or local /public paths) in one place.
const u=(id,w=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`
export const img={
 hero:u('photo-1414235077428-338989a2e8c0',2000),about:u('photo-1517248135467-4c7edcad34c4',1000),
 promo:u('photo-1424847651672-bf20a4b0982b',2000),steak:u('photo-1544025162-d76694265947',900),
 pasta:u('photo-1473093295043-cdd812d0e601',900),salmon:u('photo-1467003909585-2f8a72700288',900),
 dessert:u('photo-1551024601-bec78aea704b',900),grill:u('photo-1555939594-58d7cb561ad1',900),food:u('photo-1504674900247-0877df9cc836',900)}
