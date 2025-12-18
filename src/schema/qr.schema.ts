import { z } from "zod";
import { QRCodeMode } from "../type/enum";

export const gradientSchema = z.object({
  type: z.enum(["linear", "radial"]).optional(),
  rotation: z.number().optional(),
  colorStops: z
    .array(
      z.object({
        offset: z.number(),
        color: z.string(),
      })
    )
    .optional(),
});

export const colorSchema = z.object({
  color: z.string().optional(),
  gradient: gradientSchema.optional(),
});

export const dotsOptionsSchema = z.object({
  type: z
    .enum([
      "rounded",
      "dots",
      "classy",
      "classy-rounded",
      "square",
      "extra-rounded",
    ])
    .optional(),
  ...colorSchema.shape,
});

export const cornersSquareOptionsSchema = z.object({
  type: z.enum(["dot", "square", "extra-rounded"]).optional(),
  ...colorSchema.shape,
});

export const cornersDotOptionsSchema = z.object({
  type: z.enum(["dot", "square"]).optional(),
  ...colorSchema.shape,
});

export const backgroundOptionsSchema = z.object({
  color: z.string().optional(),
  gradient: gradientSchema.optional(),
});

export const imageOptionsSchema = z.object({
  hideBackgroundDots: z.boolean().optional(),
  imageSize: z.number().optional(),
  margin: z.number().optional(),
  crossOrigin: z.string().optional(),
});

export const qrFormSchema = z.object({

  /* QR Code Mode URL, Phone, Email */
  mode: z.nativeEnum(QRCodeMode).default(QRCodeMode.URL),

  /** Content */
  data: z.string().min(1, "QR content is required"),

  /** Size */
  width: z.number().min(100).max(1000).default(300),
  height: z.number().min(100).max(1000).default(300),
  margin: z.number().min(0).max(100).default(10),

  /** Error correction */
  errorCorrectionLevel: z.enum(["L", "M", "Q", "H"]).default("M"),

  /** Dots styling */
  dotsOptions: dotsOptionsSchema.optional(),

  /** Corner styling */
  cornersSquareOptions: cornersSquareOptionsSchema.optional(),
  cornersDotOptions: cornersDotOptionsSchema.optional(),

  /** Background style */
  backgroundOptions: backgroundOptionsSchema.optional(),

  /** Logo / image */
  image: z.any().optional(),
  hideBackgroundDots: z.boolean().default(true),
  imageSize: z.number().min(0).max(1).default(0.4).optional(),
  imageMargin: z.number().min(0).max(100).default(0).optional(),

});

export type QrFormData = z.infer<typeof qrFormSchema>;
