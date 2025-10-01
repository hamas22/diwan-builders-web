export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      about_sections: {
        Row: {
          content_ar: string
          content_en: string
          id: string
          image_url: string | null
          title_ar: string
          title_en: string
          updated_at: string | null
        }
        Insert: {
          content_ar: string
          content_en: string
          id?: string
          image_url?: string | null
          title_ar: string
          title_en: string
          updated_at?: string | null
        }
        Update: {
          content_ar?: string
          content_en?: string
          id?: string
          image_url?: string | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      achievements: {
        Row: {
          icon: string | null
          id: string
          number: number
          sort_order: number | null
          title_ar: string
          title_en: string
          updated_at: string | null
        }
        Insert: {
          icon?: string | null
          id?: string
          number: number
          sort_order?: number | null
          title_ar: string
          title_en: string
          updated_at?: string | null
        }
        Update: {
          icon?: string | null
          id?: string
          number?: number
          sort_order?: number | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          password_hash: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          password_hash: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          password_hash?: string
        }
        Relationships: []
      }
      contact_info: {
        Row: {
          address_ar: string | null
          address_en: string | null
          email: string | null
          facebook_url: string | null
          id: string
          instagram_url: string | null
          map_url: string | null
          phone1: string | null
          phone2: string | null
          tiktok_url: string | null
          twitter_url: string | null
          updated_at: string | null
          working_hours_ar: string | null
          working_hours_en: string | null
        }
        Insert: {
          address_ar?: string | null
          address_en?: string | null
          email?: string | null
          facebook_url?: string | null
          id?: string
          instagram_url?: string | null
          map_url?: string | null
          phone1?: string | null
          phone2?: string | null
          tiktok_url?: string | null
          twitter_url?: string | null
          updated_at?: string | null
          working_hours_ar?: string | null
          working_hours_en?: string | null
        }
        Update: {
          address_ar?: string | null
          address_en?: string | null
          email?: string | null
          facebook_url?: string | null
          id?: string
          instagram_url?: string | null
          map_url?: string | null
          phone1?: string | null
          phone2?: string | null
          tiktok_url?: string | null
          twitter_url?: string | null
          updated_at?: string | null
          working_hours_ar?: string | null
          working_hours_en?: string | null
        }
        Relationships: []
      }
      featured_projects: {
        Row: {
          description_ar: string | null
          description_en: string | null
          id: string
          location_ar: string | null
          location_en: string | null
          main_image_url: string | null
          sort_order: number | null
          title_ar: string
          title_en: string
          updated_at: string | null
        }
        Insert: {
          description_ar?: string | null
          description_en?: string | null
          id?: string
          location_ar?: string | null
          location_en?: string | null
          main_image_url?: string | null
          sort_order?: number | null
          title_ar: string
          title_en: string
          updated_at?: string | null
        }
        Update: {
          description_ar?: string | null
          description_en?: string | null
          id?: string
          location_ar?: string | null
          location_en?: string | null
          main_image_url?: string | null
          sort_order?: number | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      hero_sections: {
        Row: {
          button1_text_ar: string | null
          button1_text_en: string | null
          button2_text_ar: string | null
          button2_text_en: string | null
          id: string
          image_url: string | null
          title_ar: string
          title_en: string
          updated_at: string | null
        }
        Insert: {
          button1_text_ar?: string | null
          button1_text_en?: string | null
          button2_text_ar?: string | null
          button2_text_en?: string | null
          id?: string
          image_url?: string | null
          title_ar: string
          title_en: string
          updated_at?: string | null
        }
        Update: {
          button1_text_ar?: string | null
          button1_text_en?: string | null
          button2_text_ar?: string | null
          button2_text_en?: string | null
          id?: string
          image_url?: string | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      project_images: {
        Row: {
          id: string
          image_url: string
          project_id: string | null
          sort_order: number | null
        }
        Insert: {
          id?: string
          image_url: string
          project_id?: string | null
          sort_order?: number | null
        }
        Update: {
          id?: string
          image_url?: string
          project_id?: string | null
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_images_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "featured_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      service_images: {
        Row: {
          id: string
          image_url: string
          service_id: string | null
          sort_order: number | null
        }
        Insert: {
          id?: string
          image_url: string
          service_id?: string | null
          sort_order?: number | null
        }
        Update: {
          id?: string
          image_url?: string
          service_id?: string | null
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "service_images_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          description_ar: string | null
          description_en: string | null
          id: string
          image_url: string | null
          sort_order: number | null
          title_ar: string
          title_en: string
          updated_at: string | null
        }
        Insert: {
          description_ar?: string | null
          description_en?: string | null
          id?: string
          image_url?: string | null
          sort_order?: number | null
          title_ar: string
          title_en: string
          updated_at?: string | null
        }
        Update: {
          description_ar?: string | null
          description_en?: string | null
          id?: string
          image_url?: string | null
          sort_order?: number | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          id: string
          logo_url: string | null
          primary_color: string | null
          secondary_color: string | null
          site_name_ar: string | null
          site_name_en: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          logo_url?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          site_name_ar?: string | null
          site_name_en?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          logo_url?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          site_name_ar?: string | null
          site_name_en?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      vision_sections: {
        Row: {
          ceo_name_ar: string | null
          ceo_name_en: string | null
          content_ar: string
          content_en: string
          id: string
          image_url: string | null
          title_ar: string
          title_en: string
          updated_at: string | null
        }
        Insert: {
          ceo_name_ar?: string | null
          ceo_name_en?: string | null
          content_ar: string
          content_en: string
          id?: string
          image_url?: string | null
          title_ar: string
          title_en: string
          updated_at?: string | null
        }
        Update: {
          ceo_name_ar?: string | null
          ceo_name_en?: string | null
          content_ar?: string
          content_en?: string
          id?: string
          image_url?: string | null
          title_ar?: string
          title_en?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
