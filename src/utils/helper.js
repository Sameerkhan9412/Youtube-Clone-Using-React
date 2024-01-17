const nameList=[
  {name:"Code Help",logo:"https://rb.gy/5wvi89"},
  {name:"Code With Harry",logo:"https://rb.gy/appucc"},
  {name:"Technical Thapa",logo:"https://yt3.googleusercontent.com/ytc/AIf8zZT7jZRyL-nOK3OdE8LBJpT2u5MimC-yeh8_jYpWrg=s176-c-k-c0x00ffffff-no-rj-mo"},
  {name:"Technical Suneja",logo:"https://yt3.ggpht.com/f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s176-c-k-c0x00ffffff-no-rj-mo"},
  {name:"Chai And Code",logo:"https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj-mo"},
  {name:"Apna College",logo:"https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s176-c-k-c0x00ffffff-no-rj-mo"},
  {name:"Akshay Saini",logo:"https://yt3.googleusercontent.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s176-c-k-c0x00ffffff-no-rj-mo"},
  {name:"GFG",logo:"https://yt3.googleusercontent.com/ytc/AIf8zZTPIL9EkFafJj8HqxgEj9avK-OBX-U6p0V9NrEwSw=s176-c-k-c0x00ffffff-no-rj-mo"},
  {name:"Faraz",logo:"https://yt3.ggpht.com/FitboDHvZPrXqXtbe1JjfeN9x_wgNxv58GDadFqIf5nu1peeADWpWdW82Sb7eBaFH-TNy9AqgbM=s176-c-k-c0x00ffffff-no-rj-mo"},
  {name:"Coding Ninja",logo:"https://yt3.ggpht.com/Qak2Unp_tDxiEMmSwOj8oSUZLMytk7fcWSZA5UL2eWaxBOgUCnyvEQorbcwnVQderfZQLrko=s176-c-k-c0x00ffffff-no-rj-mo"},

]


  export const homePageButtonNameList=[
    "Entertenment","Music","Computer Science","Bollywood Music","Gaming","Thoughts","Indian Pop Music","Gadgets","Live","News","Cricket","Recent Uploaded","New For You"
  ]

export const  randomNameGenerater=()=> {
  return nameList[Math.floor(Math.random() * nameList.length)];
};



export function generateRandomMsg(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export const videoTitleLength=(title,lastIndex)=>{
  return title.length>75?(title.substring(0,lastIndex)+"..."):title;
}