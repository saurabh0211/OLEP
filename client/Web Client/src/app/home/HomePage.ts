export class HomePage {
  _id?: string;

  banner?:{
    branchImageUrl?: string;
    menuItems?:[{
        item?:string;
    }];
    heading?:string;
    subHeading?:string;
};

cards?:[{
  card?:[{
      imageUrl?: String;
      title?: String;
      cardContent?: String
  }];
}];
}






