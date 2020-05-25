resource "aws_s3_bucket" "react_tutorial_app" {
  bucket = var.application_subdomain
  acl    = "public-read"
  cors_rule {
        allowed_headers = ["*"]
        allowed_methods = ["GET", "PUT","POST"]
        allowed_origins = ["*"]
        expose_headers = ["ETag"]
        max_age_seconds = 3000
  }
  tags = {
    Name        = "terraform"
  }
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid" : "AddPerm",
      "Effect" : "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::${var.application_subdomain}/*"
      ]
    }
  ]
}
POLICY
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}