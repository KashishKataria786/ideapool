import { prisma } from "../config/db.js";

export const postAIdea = async (req, res) => {
  const { title, description, email } = req.body;

  if (!title || !description || !email) {
    return res.status(400).json({ message: "Title, description, and email are required" });
  }

  try {
    const newIdea = await prisma.idea.create({
      data: {
        title,
        description,
        email,
        upvotes: 0, 
      },
    });

    return res.status(201).json(newIdea); 
  } catch (error) {
    console.error("Error creating idea:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetAllIdeas = async (req, res) => {
  try {
    const ideas = await prisma.idea.findMany({
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json(ideas);
  } catch (error) {
    console.error("Error fetching ideas:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const upvoteIdea = async(req,res)=>{
    const id =req.params.id;
    if(!id)return res.status(404).send({message:"Idea not found in the Database"});
    try {
        const check = await prisma.idea.findUnique({
            where:{id:parseInt(id)}
        })
        if(!check)return res.status(404).send({message:"Idea not found"})

        const idea = await prisma.idea.update(
            {
                where:{id : parseInt(id)},
                data:{
                    upvotes:{increment:1}
                }
            }

        );
        return res.status(200).json(idea);
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Internal Server Error"});
    }
}