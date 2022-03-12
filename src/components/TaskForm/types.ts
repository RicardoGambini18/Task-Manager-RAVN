export interface FormProps {
  pointEstimate: string
  assigneeId: string
  dueDate: string
  position?: number
  name: string
  status: string
  tags: string[]
  id?: string
}

export interface UserProps {
  id: string
  avatar: string
  fullName: string
}

export interface OnClickFunc {
  (): void
}

export interface DateInputProps {
  value?: string | undefined
  onClick?: OnClickFunc | undefined
}

export interface TaskFormPorps {
  onCancel: OnClickFunc
  initialValues?: FormProps
}
