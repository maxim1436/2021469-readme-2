import { CreateTextPostDto } from "./create-text-post.dto";
import { CreateVideoPostDto } from "./create-video-post.dto";
import { CreatePhotoPostDto } from "./create-photo-post.dto";
import { CreateLinkPostDto } from "./create-link-post.dto";

export class CreatePostDto {
  public type: string;
  public textPosts?: CreateTextPostDto[];
  public linkPosts?: CreateLinkPostDto[];
  public videoPosts?: CreateVideoPostDto[];
  public photoPosts?: CreatePhotoPostDto[];
}
