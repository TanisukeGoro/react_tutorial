terraform {
  required_version = ">= 0.12.0"

  backend "s3" {
    bucket = "terraform-react-tutorial"
    key    = "terraform.tfstate"
    region = "ap-northeast-1"
  }
}
