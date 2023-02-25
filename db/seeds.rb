# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#   crafts = Homemade.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

wineBottles = Homemade.create!(title:'Painted Wine Bottles',materials:'wine bottles,paint',difficulty:'easy',image:'https://craftsbyamanda.com/wp-content/uploads/2017/08/painted-wine-bottles-v1.jpg',directions:'You could easily spray paint the bottles beforehand, and then let everyone paint their wine bottles however they like. Then everyone can go home with an upcycled wine bottle vase. So fun!')
bohoVases = Homemade.create!(title:'DIY Boho Vases',materials:'Square or cylinder terracota planters,Boho fabric trim,Hot glue,Scissors',difficulty:'medium',image:'https://designimprovised.com/wp-content/uploads/2021/08/diy-boho-vases-3.jpg',directions:'Attach the ribbon to the vase by running a bead of hot glue along the top and bottom edges of the ribbon. Be careful to keep the ribbon level as you wrap it around the vase. ')
stainedGlass = Homemade.create!(title:'Faux Stained Glass Mosaic Luminary',materials:'DecoArts glass stain paints,glass votive holder',difficulty:'medium',image:'https://craftsbyamanda.com/wp-content/uploads/2013/08/faux-stain-glass-luminary-g.jpg',directions:'This project takes a full 4 days to complete. The actual work you do on the project is not the time consuming part, its the drying time. The first step is the leading (outline) and that must dry for 6-8 hours. After you fill in the color, that must dry for 24 hours.')
foldingStool = Homemade.create!(title:'DIY folding stool',materials:'wood,fabric',difficulty:'hard',image:'https://1.bp.blogspot.com/--4xGbEPoNpI/U0yV1mDIQCI/AAAAAAAAJw8/tP2dO1XXXzk/s1600/DSC_6688.jpg',directions:'Heres the guest tutorial I mentioned yesterday: a DIY folding stool made from scratch! This project uses more of my new Arrow fabric and makes a great side table, footrest, or portable seat. Heres LiEr to tell you how to make them.')
yarnHanging = Homemade.create!(title:'Yarn Wall Hanging',materials:'wood rod,yarn',difficulty:'easy',image:'https://diycandy.com/wp-content/uploads/2020/09/DIY-yarn-wall-hanging-laying-on-a-white-backgroun-720x540.jpg.webp',directions:'Im excited to share this yarn wall hanging with you because its SO easy. Youll only need to cut a dowel rod down to size, cut yarn, and then drill holes in the ends to attach your hanger. Although I have an option for that if you dont have a drill!')


okOne = User.create!(username:'jim brady',password_digest:'whatever123',image_url:'https://dcist.com/wp-content/uploads/sites/3/2020/02/wilford_newsletter.jpg')
okTwo = User.create!(username:'Mr.Mewmew',password_digest:'okidoki123',image_url:'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-1.jpg')
okThree = User.create!(username:'Missy.Chunkychunk',password_digest:'mysoni123',image_url:'https://preview.redd.it/usonn8a91jb41.jpg?auto=webp&s=7156416613d5f0f529b6b812b175f3399f70f979')
okFour = User.create!(username:'grumpy McGrumperston',password_digest:'guess123',image_url:'https://people.com/thmb/JzeSCNlCeO7MZlQE4dUoxasKJRc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/grumpy_kitzia-3-49f1519d7ae745fa9c3c327fd800df59.jpg')
okFive = User.create!(username:'mr.Booboo',password_digest:'alright123',image_url:'https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg')


Review.create!(reviews:'We always have an excess of empty wine bottles after throwing a dinner party and it just seems like just a waste to even recycle them. I decided to try my hand at painting wine bottles just for fun.',rating:3,homemade_id:wineBottles.id,user_id:okOne.id)
Review.create!(reviews:'I refinish furniture for a living and staging that furniture for photographs is part of the job, so I need A LOT of home decor items to choose from. And lets face it, home decor is not cheap. A beautiful and unique vase will cost upwards of $20, and when I need that vase in multiple colors/styles, it gets super pricey. Sooooo....what better way than to create that vase yourself?',rating:2,homemade_id:bohoVases.id,user_id:okTwo.id)
Review.create!(reviews:'Ive always been in love with luminaries. They are very easy to create and the results are so visually stunning that I could stare at them for hours. Im also all about color. I love a craft project thats studded with several different colors from all over the rainbow.',rating:4.5,homemade_id:stainedGlass.id,user_id:okThree.id)
Review.create!(reviews:'All practicality aside, this small folding wooden stool is as irresistible as a wooden puzzle. Youll love the way the stool unfolds—the two halves of the seat glide together as the legs slide apart below. ',rating:2.5,homemade_id:foldingStool.id,user_id:okFour.id)
Review.create!(reviews:'Fiber art wall hangings are some of the coolest textured decor you can style on your walls. Since larger pieces can get pricey, I thought it would be fun to use some textured yarn to show you how to make your own at home on the cheap.',rating:5,homemade_id:yarnHanging.id,user_id:okFive.id)



puts "✅ Done seeding!"