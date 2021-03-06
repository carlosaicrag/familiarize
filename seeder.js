const Node = require("./models/Node");
const Tree = require('./models/Tree');
const User = require('./models/User');

const seed = () => {

    //Admin Users
    User.collection.deleteMany({})

    const SFAdmin = new User({
        username: 'SFAdmin',
        email: 'instructors-sf@appacademy.io',
        password: 'go_familytree_go'
    });
    SFAdmin.save();

    const NYAdmin = new User({
        username: 'NYAdmin',
        email: 'instructors-ny@appacademy.io',
        password: 'go_familytree_go'
    })
    NYAdmin.save();


    //trees
    Tree.collection.deleteMany({})

    const SFInstructors = new Tree({
        name: "San Francisco Instructors",
        creator: SFAdmin
    })
    SFInstructors.save();

    const NYInstructors = new Tree({
        name: "New York Instructors",
        creator: NYAdmin
    })
    NYInstructors.save();

    //instructors
    Node.collection.deleteMany({})

    const elliot = new Node({
        name: "Elliot Humphrey",
        parents: [],
        tree_id: "San Francisco Instructors"
    })
    elliot.save()

    const luke = new Node({
        name: 'Luke Wassink',
        parents: [],
        tree_id: "San Francisco Instructors"
    })
    luke.save()

    const dallas = new Node({
        name: "Dallas Hall",
        parents: [luke],
        tree_id: "San Francisco Instructors"
    })
    dallas.save()

    const aaron = new Node({
        name: "Aaron Wayne",
        parents: [dallas],
        tree_id: "San Francisco Instructors"
    })
    aaron.save()

    const robert = new Node({
        name: "Robert Koeze",
        parents: [],
        tree_id: "San Francisco Instructors"
    })
    robert.save()

    const hope = new Node({
        name: "Hope Wanroy",
        parents: [robert],
        tree_id: "San Francisco Instructors"
    })
    hope.save()
    
    const cynthia = new Node({
        name: "Cynthia Ma",
        parents:[hope],
        tree_id: "San Francisco Instructors"
    })
    cynthia.save()

    const carly = new Node({
        name: "Carly Schaff",
        parents: [cynthia],
        tree_id: "San Francisco Instructors"
    })
    carly.save()
    
    const mike = new Node({
        name: "Mike Madsen",
        parents: [carly],
        tree_id: "San Francisco Instructors"
    })
    mike.save()



    const ronil = new Node({
        name: "Ronil Bhatia",
        parents: [cynthia],
        tree_id: "San Francisco Instructors"
    })
    ronil.save()

    const ryan = new Node({
        name: "Ryan Mapa",
        parents: [elliot],
        tree_id: "San Francisco Instructors"
    })
    ryan.save()

    const jen = new Node({
        name: "Jen von Moltke",
        parents: [cynthia],
        tree_id: "San Francisco Instructors"
    })
    jen.save()

    const carlos = new Node({
        name: "Carlos Garcia",
        parents: [elliot],
        tree_id: "San Francisco Instructors"
    })
    carlos.save()

    const andy = new Node({
        name: "Andy Minucos",
        parents: [elliot],
        tree_id: "San Francisco Instructors"
    })
    andy.save()

    const helen = new Node({
        name: "Helen Yu",
        parents:[elliot],
        tree_id: "San Francisco Instructors"
    })
    helen.save()

    const stephen = new Node({
        name: "Stephen Pangburn",
        parents: [elliot],
        tree_id: "San Francisco Instructors"
    })
    stephen.save()

    const jesse = new Node({
        name: "Jesse Wong",
        parents: [stephen],
        tree_id: "San Francisco Instructors"
    })
    jesse.save()

    const ryanM = new Node({
        name: "Ryan Mease",
        parents: [stephen],
        tree_id: "San Francisco Instructors"
    })
    ryanM.save()

    const andyW = new Node({
        name: "Andy WynKoop",
        parents: [aaron],
        tree_id: "San Francisco Instructors"
    })
    andyW.save()

    const walker = new Node({
        name: "Sam Walker",
        parents: [mike],
        tree_id: "San Francisco Instructors"
    })
    walker.save()

    const lina = new Node({
        name: "Lina Kherchi",
        parents: [ronil],
        tree_id: "San Francisco Instructors"
    })
    lina.save()

    const dean = new Node({
        name: "Dean Lacap",
        parents: [cynthia],
        tree_id: "San Francisco Instructors"
    })
    dean.save()

    const rose = new Node({
        name: "Rose Koron",
        parents: [cynthia],
        tree_id: "San Francisco Instructors"
    })
    rose.save()

    const michelle = new Node({
        name: "Michelle Kim",
        parents: [ryan],
        tree_id: "San Francisco Instructors"
    })
    michelle.save()

    const erik = new Node({
        name: "Erik Elliot",
        parents: [ryan],
        tree_id: "San Francisco Instructors"
    })
    erik.save()

    const julia = new Node({
        name: "Julia Wang",
        parents: [ryan],
        tree_id: "San Francisco Instructors"
    })
    julia.save()

    const angela = new Node({
        name: "Angela Topchev",
        parents: [jen],
        tree_id: "San Francisco Instructors"
    })
    angela.save()

    const alissa = new Node({
        name: "Alissa Crane",
        parents: [jen],
        tree_id: "San Francisco Instructors"
    })
    alissa.save()

    const vanessa = new Node({
        name: "Vanessa Chen",
        parents: [jen],
        tree_id: "San Francisco Instructors"
    })
    vanessa.save()

    const joe = new Node({
        name: 'Joe Bumbaca',
        parents: [dean],
        tree_id: "San Francisco Instructors"
    })
    joe.save()

    const quinn = new Node({
        name: 'Quinn Leong',
        parents: [],
        tree_id: "San Francisco Instructors"
    })
    quinn.save()

    const shamayel = new Node({
        name: 'Shamayel Daoud',
        parents: [quinn],
        tree_id: "San Francisco Instructors"
    })
    shamayel.save()

    const brooke = new Node({
        name: 'Brooke Angel',
        parents: [],
        tree_id: "San Francisco Instructors"
    })
    brooke.save()

    const jennifer = new Node({
        name: 'Jennifer Georgevich',
        parents: [brooke],
        tree_id: "San Francisco Instructors"
    })
    jennifer.save()

    const kelly = new Node({
        name: 'Kelly Chung',
        parents: [],
        tree_id: "San Francisco Instructors"
    })
    kelly.save()

    const adom = new Node({
        name: 'Adom Hartell',
        parents: [kelly],
        tree_id: "San Francisco Instructors"
    })
    adom.save()

    const david = new Node({
        name: 'David Dobrynin',
        parents: [dallas],
        tree_id: "San Francisco Instructors"
    })
    david.save()

    const anastassia = new Node({
        name: 'Anastassia Bobokalonova',
        parents: [david],
        tree_id: "San Francisco Instructors"
    })
    anastassia.save()

    const isak = new Node({
        name: 'Isak Mladenoff',
        parents: [david],
        tree_id: "San Francisco Instructors"
    })
    isak.save()

    const munyo = new Node({
        name: 'Munyo Frey',
        parents: [shamayel],
        tree_id: "San Francisco Instructors"
    })
    munyo.save()

    

}

module.exports = seed