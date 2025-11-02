import CommentField from "../../features/CommentField";
import { prisma } from "@/lib/prisma";

const CommentSection = async () => {
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <CommentField comments={comments} />
    </div>
  );
};

export default CommentSection;
