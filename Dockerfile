FROM public.ecr.aws/lambda/nodejs:12
COPY app.js ./
CMD ["app.handler"]